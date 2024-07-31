import React from "react";
import { TextField, Grid, MenuItem } from "@mui/material";

const PersonalInfo = ({ formData, handleFormChange }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          id="name"
          name="name"
          label="Full Name"
          fullWidth
          variant="outlined"
          value={formData.name}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="address"
          name="address"
          label="Address"
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          value={formData.address}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          fullWidth
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="phone_no"
          name="phone_no"
          label="Phone Number"
          fullWidth
          variant="outlined"
          value={formData.phone_no}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="sex"
          name="sex"
          select
          label="Sex"
          fullWidth
          variant="outlined"
          value={formData.sex}
          onChange={handleFormChange}
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
          <MenuItem value="O">Other</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
