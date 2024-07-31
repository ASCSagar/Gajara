import React from "react";
import { Typography, Grid } from "@mui/material";

const Review = ({ formData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Typography gutterBottom>Name: {formData.name}</Typography>
        <Typography gutterBottom>Address: {formData.address}</Typography>
        <Typography gutterBottom>Email: {formData.email}</Typography>
        <Typography gutterBottom>Phone: {formData.phone_no}</Typography>
        <Typography gutterBottom>Sex: {formData.sex}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Academic Information
        </Typography>
        <Typography gutterBottom>
          University: {formData.university_name}
        </Typography>
        <Typography gutterBottom>
          Current Semester: {formData.current_semester}
        </Typography>
        <Typography gutterBottom>
          University Permission: {formData.university_permission ? "Yes" : "No"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Volunteer Information
        </Typography>
        <Typography gutterBottom>Event: {formData.event || "N/A"}</Typography>
        <Typography gutterBottom>
          Initiative: {formData.initiative || "N/A"}
        </Typography>
        <Typography gutterBottom>
          Work Duration: {formData.work_duration_months} months
        </Typography>
        <Typography gutterBottom>
          Resume: {formData.resume ? formData.resume.name : "Not uploaded"}
        </Typography>
        <Typography gutterBottom>
          Photograph:{" "}
          {formData.photograph ? formData.photograph.name : "Not uploaded"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Review;
