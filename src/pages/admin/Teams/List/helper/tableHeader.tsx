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
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.teamName')}
        </Text>
      ),
      width: 230,
    },
    {
      name: 'city',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.city')}
        </Text>
      ),
      width: 350,
    },
    {
      name: 'address',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.address')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
