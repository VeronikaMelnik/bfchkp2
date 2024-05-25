import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableHeader: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation('table');
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
          {t('header.teamsName')}
        </Text>
      ),
      width: 230,
    },
    {
      name: 'city',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.teamsCity')}
        </Text>
      ),
      width: 350,
    },
    {
      name: 'address',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.teamsAddress')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
