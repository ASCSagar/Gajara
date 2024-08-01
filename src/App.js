import React, { useState, useEffect } from "react";
import axios from "axios";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Box,
  Paper,
  Snackbar,
} from "@mui/material";
import PersonalInfo from "./components/PersonalInfo";
import AcademicInfo from "./components/AcademicInfo";
import VolunterInfo from "./components/VolunterInfo";
import Review from "./components/Review";
import {
  Alert,
  ColorlibConnector,
  ColorlibStepIcon,
  PageBackground,
} from "./mui";

const steps = [
  "Personal Information",
  "Academic Information",
  "Volunteer Information",
  "Review",
];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone_no: "",
    sex: "",
    university_name: "",
    current_semester: "",
    university_permission: false,
    event: "",
    initiative: "",
    work_duration_months: "",
    resume: "",
    photograph: "",
  });

  const [events, setEvents] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eResponse = await axios.get(
          "https://gazra.org/gazra/api/events/"
        );
        setEvents(eResponse.data);

        const iResponse = await axios.get(
          "https://gazra.org/gazra/api/initiatives/"
        );
        setInitiatives(iResponse.data);
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Error fetching data. Please try again later.",
          severity: "error",
        });
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleFormChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const updatedData = {
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    };
    setFormData(updatedData);
  };

  const validateForm = () => {
    const requiredFields = [
      "name",
      "email",
      "phone_no",
      "sex",
      "university_name",
      "current_semester",
      "work_duration_months",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setSnackbar({
          open: true,
          message: `Please fill in all required fields. Missing: ${field.replace(
            "_",
            " "
          )}`,
          severity: "error",
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (
        formData[key] !== "" &&
        formData[key] !== null &&
        formData[key] !== undefined
      ) {
        formDataToSubmit.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "https://gazra.org/gazra/api/student-volunteers/",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log("Response", response);
      setSnackbar({
        open: true,
        message: "Form submitted successfully!",
        severity: "success",
      });
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error submitting form. Please try again.",
        severity: "error",
      });
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            formData={formData}
            handleFormChange={handleFormChange}
          />
        );
      case 1:
        return (
          <AcademicInfo
            formData={formData}
            handleFormChange={handleFormChange}
          />
        );
      case 2:
        return (
          <VolunterInfo
            events={events}
            formData={formData}
            initiatives={initiatives}
            handleFormChange={handleFormChange}
          />
        );
      case 3:
        return <Review formData={formData} />;
      default:
        return "";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <PageBackground>
        <Container component="main" maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              my: { xs: 3, md: 6 },
              p: { xs: 2, md: 3 },
              borderRadius: 2,
              backgroundColor: "background.paper",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="Gazara"
                style={{ maxWidth: "200px" }}
              />
            </Box>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ mb: 4, color: "primary.main" }}
            >
              Volunteer Registration
            </Typography>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ mt: 4, mb: 4 }}>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    sx={{ color: "primary.main" }}
                  >
                    Thank you for your registration.
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    We have received your volunteer application. We will review
                    your information and get back to you soon.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                  >
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mr: 1 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        color: "white",
                        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Paper>
        </Container>
      </PageBackground>
    </ThemeProvider>
  );
}

export default App;
