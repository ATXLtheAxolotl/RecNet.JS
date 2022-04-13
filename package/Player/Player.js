import axios from "axios";

export class Player {
    Username;
    ID
    DisplayName;
    ProfileImage;
    isJunior;
    Platforms;
    PersonalPronouns;
    IdentityFlags;
    CreationDate;

    constructor(ID, Username, DisplayName, ProfileImage, isJunior, Platforms, PersonalPronouns, IdentityFlags, CreationDate) {
        this.ID = ID;
        this.Username = Username;
        this.DisplayName = DisplayName;
        this.ProfileImage = ProfileImage;
        this.isJunior = isJunior;
        this.Platforms = Platforms;
        this.PersonalPronouns = PersonalPronouns;
        this.IdentityFlags = IdentityFlags;
        this.CreationDate = new Date(CreationDate);
    }

    getBio() {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account/${this.ID}/bio`).then((r)=> {
                res(r.data.bio)
            })
        })
    }

    getImage() {
        return new Promise (res => {
            axios.get(`https://img.rec.net/${this.ProfileImage}`, {
                responseType: 'arraybuffer'
              }).then((r)=> {
                res(Buffer.from(r.data, 'binary').toString('base64'));
            })
        })
    }
}