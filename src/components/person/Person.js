import { img_300, unavailablePicture } from "config";
import { CustomizedPerson } from "styles";

const Person = ({ isCastSlider, person }) => {

    return (
        <CustomizedPerson>
            <div className="person-box h-100 mt-2">
                <div className="person-photo w-100">
                    <img 
                        className="w-100 h-100" 
                        src={person.profile_path ? img_300 + person.profile_path : unavailablePicture} 
                        alt="person_photo" 
                        width="140" 
                        height="180"
                    />
                </div>
                {person.name && <h6 className="person-name text-center font-weight-bold mt-3">{person.name}</h6>}
                {person.character && isCastSlider && <span className="person-extra-data d-block text-center">({person.character})</span>}
                {person.department && !isCastSlider && <span className="person-extra-data d-block text-center">({person.department})</span>}
            </div>
        </CustomizedPerson>
    );
}

export default Person;