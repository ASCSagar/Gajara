import React from "react";
import { Grid, TextField, MenuItem, Button } from "@mui/material";

const VolunterInfo = ({ formData, handleFormChange, events, initiatives }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="event"
          name="event"
          select
          label="Event (Optional)"
          fullWidth
          variant="outlined"
          value={formData.event}
          onChange={handleFormChange}
        >
          {events.map((event) => (
            <MenuItem key={event.id} value={event.id}>
              {event.title}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="initiative"
          name="initiative"
          select
          label="Initiative (Optional)"
          fullWidth
          variant="outlined"
          value={formData.initiative}
          onChange={handleFormChange}
        >
          {initiatives.map((initiative) => (
            <MenuItem key={initiative.id} value={initiative.id}>
              {initiative.title}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="work_duration_months"
          name="work_duration_months"
          label="Work Duration (Months)"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.work_duration_months}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <input
          accept="application/pdf"
          style={{ display: "none" }}
          id="resume"
          name="resume"
          type="file"
          onChange={handleFormChange}
        />
        <label htmlFor="resume">
          <Button variant="contained" component="span">
            Upload Resume
          </Button>
        </label>
        {formData.resume && (
          <span style={{ marginLeft: "10px" }}>{formData.resume.name}</span>
        )}
      </Grid>
      <Grid item xs={12}>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="photograph"
          name="photograph"
          type="file"
          onChange={handleFormChange}
        />
        <label htmlFor="photograph">
          <Button variant="contained" component="span">
            Upload Photograph
          </Button>
        </label>
        {formData.photograph && (
          <span style={{ marginLeft: "10px" }}>{formData.photograph.name}</span>
        )}
      </Grid>
    </Grid>
  );
};

export default VolunterInfo;
