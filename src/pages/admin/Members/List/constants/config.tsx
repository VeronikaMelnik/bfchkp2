import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableConfig: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation('members');
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
      name: 'lastName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.lastName')}
        </Text>
      ),
      width: 215,
    },
    {
      name: 'team',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.team')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
