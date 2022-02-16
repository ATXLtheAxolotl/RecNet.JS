import axios from "axios";

export class Player  {
    username;
    id
    dn;
    pi;
    junior;
    platform;
    pronouns;
    identity;
    creation;

    constructor(ID, Username, DisplayName, ProfileImage, isJunior, Platforms, PersonalPronouns, IdentityFlags, CreationDate) {
        this.id = ID
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
    getBio() {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account/${this.id}/bio`).then((r)=> {
                res(r.data.bio)
            })
        })
    }
}