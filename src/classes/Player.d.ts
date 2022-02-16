export class Player {
    constructor(Username: string, DisplayName: string, ProfileImage: string, isJunior: string, Platforms: string, PersonalPronouns: string, IdentityFlags: string, CreationDate: string);
    username: string;
    dn: string;
    pi: string;
    junior: boolean;
    platform: number;
    pronouns: number;
    identity: number;
    creation: Date;
    getUsername(): string;
    getDisplayName(): string;
    getProfilePictureResourceName(): string;
    isJunior(): boolean;
    getPlatform(): number;
    getIdentity(): number;
    getCreationDate(): Date;
    getBio(): Promise<string>;
}
//# sourceMappingURL=Player.d.ts.map