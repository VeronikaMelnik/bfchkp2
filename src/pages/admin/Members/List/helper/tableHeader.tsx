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
          {t('header.membersName')}
        </Text>
      ),
      width: 230,
    },
    {
      name: 'lastName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.membersLastName')}
        </Text>
      ),
      width: 350,
    },
    {
      name: 'team',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.membersTeam')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
