import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGetMembers, useGetTeams } from '@features/Admin/Members';
import { useCreateMembers } from '@features/Admin/Members/hooks/create';
import { ISelectOption } from '@entities/components/editor';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useCreateMembersPage = () => {
  const { t } = useTranslation('members');
  const { create } = useCreateMembers();
  const [selectedTeam, setSelectedTeam] = useState<ISelectOption>();
  const [selectedMember, setSelectedMember] = useState<ISelectOption>();

  const {
    getData: getTeams,
    isLoading: isTeamsLoading,
    options: teamsOptions,
  } = useGetTeams();

  const {
    getData: getMembers,
    isLoading: isMembersLoading,
    options: membersOptions,
  } = useGetMembers();

  useEffect(() => {
    getTeams({
      page: 1,
      perPage: 10,
    });
    getMembers({
      page: 1,
      perPage: 10,
    });
  }, [getTeams, getMembers]);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedTeam || !selectedMember) {
      t('error');
      return;
    }
    try {
      const data = await create({
        teamId: selectedTeam.value,
        personId: selectedMember.value,
      });
      if (data) {
        navigate(AppRoutes[AppRoutesEnum.MEMBERS]());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeTeamSelection = useCallback(
    (val: unknown) => {
      setSelectedTeam(val as ISelectOption);
    },
    [setSelectedTeam],
  );

  const handleChangeMemberSelection = useCallback(
    (val: unknown) => {
      setSelectedMember(val as ISelectOption);
    },
    [setSelectedMember],
  );

  return {
    handleSubmit,
    t,
    handleChangeTeamSelection,
    handleChangeMemberSelection,
    isTeamsLoading,
    teamsOptions,
    isMembersLoading,
    membersOptions,
  };
};
