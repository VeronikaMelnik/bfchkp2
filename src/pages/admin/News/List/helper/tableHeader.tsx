import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableHeader: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation();
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.index')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'title',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.title')}
        </Text>
      ),
      width: 100,
    },
    {
      name: 'text',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.description')}
        </Text>
      ),
      width: 250,
    },
    {
      name: 'date',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.date')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
