import { FormControl, TextField, Select, MenuItem, TextareaAutosize, Button } from "@mui/material";
import { useState } from "react";

function Contact() {

    const [country, setCountry] = useState('')
    const handleSelect = (event) => {
        setCountry(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <FormControl>
            <h3 className="form-title">Contact us</h3>
            <form className={'form-contact'} onSubmit={handleSubmit}>
                <TextField fullWidth sx={{ m: 1 }} className="form-input" label="Your Name"></TextField>
                <TextField fullWidth sx={{ m: 1 }} className="form-input" label="Your Phone"></TextField>
                <TextField fullWidth sx={{ m: 1 }} className="form-input" email="true" label="Email"></TextField>
                <Select fullWidth sx={{ m: 1 }} className="form-input" value={country} onChange={handleSelect} displayEmpty>
                    <MenuItem value="">
                        Choose your favourite nation
                    </MenuItem>
                    <MenuItem value={"England"}>
                        England
                    </MenuItem>
                    <MenuItem value={"France"}>
                        France
                    </MenuItem>
                    <MenuItem value={"Spain"}>
                        Spain
                    </MenuItem>
                </Select>
                <TextareaAutosize fullWidth sx={{ m: 1 }} className="form-input textarea" label="Your content" minRows={4} placeholder="Your Content"></TextareaAutosize>
                <Button fullWidth sx={{ m: 1 }} className="form-input" variant="contained">Submit</Button>
            </form>
        </FormControl>
    );
}

export default Contact;