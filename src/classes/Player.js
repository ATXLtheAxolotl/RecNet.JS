export class Player  {
    username;
    dn;
    pi;
    junior;
    platform;
    pronouns;
    identity;
    creation;

    constructor(Username, DisplayName, ProfileImage, isJunior, Platforms, PersonalPronouns, IdentityFlags, CreationDate) {
        this.username = Username;
        this.dn = DisplayName;
        this.pi = ProfileImage;
        this.junior = isJunior;
        this.platform = Platforms;
        this.pronouns = PersonalPronouns;
        this.identity = IdentityFlags;
        this.creation = CreationDate;
    }

    getUsername() {
        return this.username;
    }
    getDisplayName() {
        return this.dn;
    }
    getProfilePictureResourceName() {
        return this.pi;
    }
    isJunior() {
        return this.junior;
    }
    getPlatform() {
        return this.platform
    }
    getIdentity() {
        return this.identity;
    }
    getCreationDate() {
        return new Date(this.creation);
    }
}