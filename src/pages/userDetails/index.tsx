import { useLocation } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

import { UsersDataModel } from "../../models/users.model";
import FlexRow from "../../components/flexRows";

const UsersDetails = () => {
  const location = useLocation();

  const user: UsersDataModel | undefined = location.state?.user;

  if (user) {
    return (
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom color="#7E838F">
          مشخصات کاربر
        </Typography>

        <FlexRow
          items={[
            { label: "نام", value: user.name },
            { label: "نام کاربری", value: user.username },
            { label: "ایمیل", value: user.email },
          ]}
        />

        <FlexRow
          items={[
            { label: "تلفن", value: user.phone },
            { label: "وبسایت", value: user.website },
            { label: "شرکت", value: user.company.name },
          ]}
        />

        <FlexRow
          items={[
            { label: "خیابان", value: user.address.street },
            { label: "سوییت", value: user.address.suite },
            { label: "شهر", value: user.address.city },
          ]}
        />

        <FlexRow
          items={[
            { label: "کد پستی", value: user.address.zipcode },
            { label: "عرض جغرافیایی", value: user.address.geo.lat },
            { label: "طول جغرافیایی", value: user.address.geo.lng },
          ]}
        />

        <FlexRow
          items={[
            { label: "نام شرکت", value: user.company.name },
            { label: "شعار", value: user.company.catchPhrase },
            { label: "حوزه فعالیت", value: user.company.bs },
          ]}
        />
      </Paper>
    );
  } else {
    return <Typography>کاربری با مشخصات خواسته شده یافت نشد.</Typography>;
  }
};

export default UsersDetails;
