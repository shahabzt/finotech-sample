import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LoginFormInputs, loginSchema } from "./formSchema";
import { addLog } from "../../store/logsReducer";
import { ActionEnums } from "../../enums/actionEnums";

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setValue: setToken } = useLocalStorage("token");
  const { setValue: setEmail } = useLocalStorage("email");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    setToken("true");
    setEmail(data.email);
    dispatch(addLog(ActionEnums.LOGIN));
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
          ورود به پنل کاربری
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="ایمیل"
                fullWidth
                autoComplete="email"
                autoFocus
                margin="normal"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="رمز عبور"
                type="password"
                fullWidth
                margin="normal"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mt: 3, mb: 2 }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginContainer;
