import { img_300, unavailablePicture } from "config";
import { CustomizedPerson } from "styles";

const Person = ({ isCastSlider, person }) => {

    return (
        <CustomizedPerson>
            <div className="person-box h-100">
                <div className="person-photo h-100">
                    <img className="w-100" src={person.profile_path ? img_300 + person.profile_path : unavailablePicture} alt="person_photo" width="180" height="180" />
                </div>
                <h6 className="person-name text-center font-weight-bold mt-3">{person.name}</h6>
                <span className="person-extra-data d-block text-center">({isCastSlider ? person.character : person.department})</span>
            </div>
        </CustomizedPerson>
    );
}

export default Person;