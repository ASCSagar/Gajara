import React from "react";
import { TextField, Grid, Checkbox, FormControlLabel } from "@mui/material";

const AcademicInfo = ({ formData, handleFormChange }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          id="university_name"
          name="university_name"
          label="University Name"
          fullWidth
          variant="outlined"
          value={formData.university_name}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="current_semester"
          name="current_semester"
          label="Current Semester"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.current_semester}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.university_permission}
              onChange={handleFormChange}
              name="university_permission"
              color="primary"
            />
          }
          label="I have permission from my university to volunteer"
        />
      </Grid>
    </Grid>
  );
};

export default AcademicInfo;
