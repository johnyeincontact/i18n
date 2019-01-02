
export interface ISkillDetails {
    BusinessUnitId: number,
    AgentId: number,
    InternalId: string;
    AgentName: string;
    AgentProficiencyValue: number;
    AgentProficiencyName: string;
    LastModified: Date;
    SkillName: string;
    SkillId: number;
}

export interface ISkills {
    agentSkillAssignments: ISkillDetails[];
}
