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
      name: 'place',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.place')}
        </Text>
      ),
      width: 130,
    },
    {
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.championshipName')}
        </Text>
      ),
      width: 250,
    },
    {
      name: 'personName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.name')}
        </Text>
      ),
    },
    {
      name: 'personLastName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.lastName')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
