import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Title } from './Title';

export const SectionLayout = ({ text, children }) => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 4 }}>
          <Title>{text}</Title>
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
