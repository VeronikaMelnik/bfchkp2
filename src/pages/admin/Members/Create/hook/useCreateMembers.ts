import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGetMembers, useGetTeams } from '@features/Admin/Members';
import { useCreateMembers } from '@features/Admin/Members/hooks/create';
import { ISelectOption } from '@entities/components/editor';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

type Data = {
  group_id: number;
  team_id?: number;
  member_id?: number;
  person_id?: number;
  name?: string;
  lastName?: string;
  team?: string;
};

export const useCreateMembersPage = () => {
  const { t } = useTranslation('members');
  const { create } = useCreateMembers();
  const [name, setName] = useState<string>();
  const [lastName, setLast_name] = useState<string>();
  const [team, setTeam] = useState<string>();
  const [person_id, setPerson_id] = useState<string>();
  const {
    getData: getTeams,
    isLoading: isTeamsLoading,
    options: teamsOptions,
    selected: selectedTeam,
    setSelected: setSelectedTeam,
  } = useGetTeams();
  const {
    getData: getMembers,
    isLoading: isMembersLoading,
    options: membersOptions,
    selected: selectedMember,
    setSelected: setSelectedMember,
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

  const handleSubmit = async () => {
    const body: Data = { group_id: 10 };
    if (name) body.name = name;
    if (lastName) body.lastName = lastName;
    if (team) body.team = team;
    if (selectedTeam) body.team_id = selectedTeam.value;
    if (selectedMember) body.member_id = selectedMember.value;
    if (body.member_id === 0) body.member_id = undefined;
    if (body.team_id === 0) body.team_id = undefined;
    if (body.person_id === 0) body.person_id = undefined;
    const data = await create({
      ...body,
      personId: body.person_id !== undefined ? body.person_id : 0,
      teamId: body.team_id !== undefined ? body.team_id : 0,
    });
    if (data) {
      navigate(AppRoutes[AppRoutesEnum.MEMBERS]());
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
    selectedTeam,
    isMembersLoading,
    membersOptions,
    selectedMember,
    name,
    setName,
    lastName,
    setLast_name,
    team,
    setTeam,
    person_id,
    setPerson_id,
  };
};
