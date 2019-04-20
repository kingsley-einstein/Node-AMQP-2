import { Profile } from '../model/profile';

export const seed = async (data) => {
    await Profile.create(data).then(result => console.log(result))
    .catch(err => console.log(err));
};