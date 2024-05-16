/* eslint-disable prettier/prettier */
import classNames from 'classnames';
import { FormikErrors } from 'formik';
import { QuillEditor } from '@entities/components';
import { IFile } from '@entities/types';
import { Card, TextField, Title } from '@shared/ui';
import { useEditorWidget } from '../hook/';
import styles from './Editor.module.scss';

type News = {
  title_ru?: string;
  title_en?: string;
  title_be?: string;
  description_ru?: string;
  description_en?: string;
  description_be?: string;
  meeting_link?: string | null;
};

interface Props {
  className?: string;
  loading?: boolean;
  handleUploadImage(file: File): Promise<IFile | undefined>;
  controls?: JSX.Element;
  values: News;
  errors: FormikErrors<News>;
  setFieldValue: (
    field: keyof News,
    value: string | Date | null,
    shouldValidate?: boolean | undefined,
  ) =>
    | Promise<void>
    | Promise<
      FormikErrors<{
        title: string;
        description: string;
      }>
    >;
}

export const ContentEditor = ({
  className,
  handleUploadImage,
  controls,
  errors,
  setFieldValue,
  loading,
  values,
}: Props) => {
  const { t } = useEditorWidget();
  return (
    <Card
      loading={loading}
      className={classNames(styles.wrapper, className)}
      radius={24}
      flexDirection="column"
      gap={20}
    >

      {Object.keys(values).includes('meeting_link') && (
        <TextField
          value={values.meeting_link || ''}
          error={errors.meeting_link}
          onChange={(ev) => {
            const value = ev.target.value === '' ? null : ev.target.value;
            setFieldValue('meeting_link', value);
          }}
          wrapperClassName={styles.textField}
          label={t('editor.link.label')}
          placeholder={t('editor.link.placeholder')}
        />
      )}

      <Title fontWeight="bold" variant="h2">
        {t('editor.versions.ru')}
      </Title>
      {Object.keys(values).includes('title_ru') && (
        <TextField
          value={values.title_ru}
          error={errors.title_ru}
          onChange={(ev) => setFieldValue('title_ru', ev.target.value)}
          wrapperClassName={styles.textField}
          label={t('editor.title.label')}
          placeholder={t('editor.title.placeholder')}
        />
      )}
      {Object.keys(values).includes('description_ru') && (
        <QuillEditor
          error={errors.description_ru}
          label={t('editor.content.label')}
          initialValue={values.description_ru || ''}
          setValue={(val) => setFieldValue('description_ru', val)}
          uploadImage={handleUploadImage}
        />
      )}
      <div className={styles.divider}></div>
      <Title fontWeight="bold" variant="h2">
        {t('editor.versions.en')}
      </Title>
      {Object.keys(values).includes('title_en') && (
        <TextField
          value={values.title_en}
          error={errors.title_en}
          onChange={(ev) => setFieldValue('title_en', ev.target.value)}
          wrapperClassName={styles.textField}
          label={t('editor.title.label')}
          placeholder={t('editor.title.placeholder')}
        />
      )}
      {Object.keys(values).includes('description_en') && (
        <QuillEditor
          error={errors.description_en}
          label={t('editor.content.label')}
          initialValue={values.description_en || ''}
          setValue={(val) => setFieldValue('description_en', val)}
          uploadImage={handleUploadImage}
        />
      )}

      <div className={styles.divider}></div>
      <Title fontWeight="bold" variant="h2">
        {t('editor.versions.be')}
      </Title>
      {Object.keys(values).includes('title_be') && (
        <TextField
          value={values.title_be}
          error={errors.title_be}
          onChange={(ev) => setFieldValue('title_be', ev.target.value)}
          wrapperClassName={styles.textField}
          label={t('editor.title.label')}
          placeholder={t('editor.title.placeholder')}
        />
      )}
      {Object.keys(values).includes('description_be') && (
        <QuillEditor
          error={errors.description_be}
          label={t('editor.content.label')}
          initialValue={values.description_be || ''}
          setValue={(val) => setFieldValue('description_be', val)}
          uploadImage={handleUploadImage}
        />
      )}
      {controls || ''}
    </Card>
  );
};
