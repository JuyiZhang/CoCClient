export interface navItem {
    name: string;
    iconstring: string;
    url: string;
    color: string;
}

export interface cocCharacter {
    basicInfo: cocCharacteristics[]
    properties: cocCharacteristics[]
    skills: cocCharacteristics
    weapons: cocCharacteristics
}

export interface cocWeapon {
    name: string;
    weapon_type: cocWeaponType;
    distance?: number;
    usewave?: number; //每轮，0为一次性
    loading?: number; //装弹量
    errorValue?: number;
    penetrate?: true;
}

/*export interface cocCharacterBasicInfo {
    name: cocCharacteristics;
    age: cocCharacteristics;
    job: cocCharacteristics;
    time: cocCharacteristics;
    sex: cocCharacteristics;
    residence: cocCharacteristics;
    hometown: cocCharacteristics;
}*/

export interface cocCharacteristics {
    characteristic_name: string;
    characteristic_display: string;
    characteristic_type?: characteristic_type_enum;
    characteristic_dropdown?: string[];
}

export interface cocSkill {
    name: string;
    init_value: string;
    final_value: string;
    add_value?: string;
    add_value_profession?: string;
    add_value_interest?: string;
    profession_selectable?: boolean;
    profession_selected?: boolean;
    annotation_allowed?: boolean;
    annotation?: string;
    annotation_dropdown?: string[];
}

export enum characteristic_type_enum {
    string,
    dropdown,
    select_window,
    multi_dropdown_no,
    multi_dropdown_str,
    number,
    boolean
}

export enum cocWeaponType {
    fight, //斗殴
    bow,
    whip, //鞭子
    electric_saw,
    axe,
    polearm,
    sword,
    chained_weapon, //链枷
    winch, //绞具
    firearm_handgun,
    firearm_shotgun,
    firearm_smg, //冲锋枪
    firearm_mg, //机枪
    throw,
    heavy_weapon,
    electric_repair,
    blasting, //爆破
    gunnery, //炮术
    jetting_weapon //喷射器
}