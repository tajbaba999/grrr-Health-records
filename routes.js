import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';

export default function Routes() {
    return (
        <Router>
            <DoctorPage path="/doctor/:address" />
            <PatientPage path="/patient/:address" />
        </Router>
    );
}
