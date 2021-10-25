import {React, Fragment} from 'react'
import app from '../../firebase'
import { getStorage, ref, uploadBytes} from "firebase/storage";

const storage = getStorage(app);


const ReferralsFiles = () => {

  async  function onChange(e) {
        const file = e.target.files[0];
        const fileRef = ref(storage, `Curriculums/${file.name}`);
        await uploadBytes(fileRef,file);
/*         const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name) */
/*         fileRef.put(file).then(()=>{
            console.log("estoy arriba")
 } */
        }

    
    return (
        <Fragment>
            <input type="file" onChange={onChange}></input>
        </Fragment>
    )
}

export default ReferralsFiles
