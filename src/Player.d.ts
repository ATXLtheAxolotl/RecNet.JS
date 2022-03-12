export class Player {
    constructor(ID: number, Username: string, DisplayName: string, ProfileImage: string, isJunior: boolean, Platforms: number, PersonalPronouns: number, IdentityFlags: number, CreationDate: string);
    Username: string;
    ID: number;
    DisplayName: string;
    ProfileImage: string;
    isJunior: boolean;
    Platforms: number;
    PersonalPronouns: number;
    IdentityFlags: number;
    CreationDate: Date;
    getBio(): Promise<string>;
}
//# sourceMappingURL=Player.d.ts.map