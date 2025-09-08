import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import { LoginFormInputs, loginSchema } from "./formSchema";

const LoginContainer = () => {
  const navigate = useNavigate();
  const { setValue: setToken } = useLocalStorage("token");
  const { setValue: setEmail } = useLocalStorage("email");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    setToken("true");
    setEmail(data.email);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          ورود به پنل کابری
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            label="ایمیل"
            fullWidth
            autoComplete="email"
            autoFocus
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            label="رمز عبور"
            type="password"
            fullWidth
            margin="normal"
            autoComplete="current-password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mt: 3, mb: 2 }}
          >
            {"ورود"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginContainer;
