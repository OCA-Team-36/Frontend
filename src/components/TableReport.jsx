// import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const columns = [
    { field: 'no', headerName: 'No', width: 50 },
    { field: 'campaignName', headerName: 'Campaign Name', flex: 1 },
    { field: 'groupContact', headerName: 'Group Contact', flex: 1 },
    { field: 'totalBroadcast', headerName: 'Total Broadcast', type: 'number', flex: 1 },
    { field: 'createDate', headerName: 'Create Date', flex: 1 },
    { field: 'broadcastDate', headerName: 'Broadcast Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
];

const rows = [
    { id: 1, no: 1, campaignName: 'Campaign A', groupContact: 'Group 1', totalBroadcast: 150, createDate: '2024-09-01', broadcastDate: '2024-09-02', status: 'Completed' },
    { id: 2, no: 2, campaignName: 'Campaign B', groupContact: 'Group 2', totalBroadcast: 120, createDate: '2024-09-03', broadcastDate: '2024-09-04', status: 'Pending' },
    { id: 3, no: 3, campaignName: 'Campaign C', groupContact: 'Group 3', totalBroadcast: 80, createDate: '2024-09-05', broadcastDate: '2024-09-06', status: 'Failed' },
    { id: 4, no: 4, campaignName: 'Campaign D', groupContact: 'Group 4', totalBroadcast: 200, createDate: '2024-09-07', broadcastDate: '2024-09-08', status: 'Completed' },
    { id: 5, no: 5, campaignName: 'Campaign E', groupContact: 'Group 5', totalBroadcast: 90, createDate: '2024-09-09', broadcastDate: '2024-09-10', status: 'Pending' },
    { id: 6, no: 6, campaignName: 'Campaign F', groupContact: 'Group 6', totalBroadcast: 75, createDate: '2024-09-11', broadcastDate: '2024-09-12', status: 'Completed' },
    { id: 7, no: 7, campaignName: 'Campaign G', groupContact: 'Group 7', totalBroadcast: 110, createDate: '2024-09-13', broadcastDate: '2024-09-14', status: 'Failed' },
    { id: 8, no: 8, campaignName: 'Campaign H', groupContact: 'Group 8', totalBroadcast: 180, createDate: '2024-09-15', broadcastDate: '2024-09-16', status: 'Completed' },
    { id: 9, no: 9, campaignName: 'Campaign I', groupContact: 'Group 9', totalBroadcast: 130, createDate: '2024-09-17', broadcastDate: '2024-09-18', status: 'Pending' },
    { id: 10, no: 10, campaignName: 'Campaign J', groupContact: 'Group 10', totalBroadcast: 140, createDate: '2024-09-19', broadcastDate: '2024-09-20', status: 'Completed' },
];

const paginationModel = { page: 0, pageSize: 5 };

const TableReport = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ height: 400, width: '100%', my: 1 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    );
};

// TableReport.propTypes = {

// };

export default TableReport;