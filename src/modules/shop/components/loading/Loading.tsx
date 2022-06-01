import CircularProgress from '@mui/material/CircularProgress';
import './Loading.scss';

export default function Loading() {
    return (
        <div className="Loading">
            <CircularProgress size="200px" />
        </div>
    )
}