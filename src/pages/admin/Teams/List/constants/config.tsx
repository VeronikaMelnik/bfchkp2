import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableConfig: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation('teams');
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.index')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.name')}
        </Text>
      ),
      width: 215,
    },
    {
      name: 'city',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.city')}
        </Text>
      ),
      width: 215,
    },
    {
      name: 'address',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.address')}
        </Text>
      ),
    },
    {
      name: 'date',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.date')}
        </Text>
      ),
      width: 107,
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
