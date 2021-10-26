import {React, Fragment, useState} from 'react'
import app from '../../firebase'
import { getStorage, ref, uploadBytes} from "firebase/storage";
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const storage = getStorage(app);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ReferralsFiles = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <Button variant="contained" style={{background: 'linear-gradient(to right bottom, #301b70, #4527a0,#6a52b3)'}} size="small" onClick={handleOpen}>
              Subir
            </Button>
            <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
            >
                 <Box  sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                     Curriculum enviado
                 </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     Su curriculum fue enviado con éxito
                 </Typography>
                </Box>
            </Modal>
        </Fragment>
    )
}

export default ReferralsFiles
