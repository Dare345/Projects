import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const coops = [
    { id: 'employer', label: 'CO-OP Employer', minWidth: 170 },
    { id: 'degree', label: 'Degree', minWidth: 100 },
    {
      id: 'city',
      label: 'City',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'term',
      label: 'Term',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const proInfo = [
    { id: 'employer', label: 'Employer', minWidth: 170 },
    { id: 'degree', label: 'Degree', minWidth: 100 },
    {
      id: 'city',
      label: 'City',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'title',
      label: 'Title',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'startDate',
      label: 'Start Date',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

export default function table({obj}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
{/* if statment to check the list is Co-op */}
    if (obj.title == "Co-op Table"){
      return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {coops.map((coop) => (
                    <TableCell
                    key={coop.id}
                    align={coop.align}
                    style={{ minWidth: coop.minWidth }}
                    >
                    {coop.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {obj.coopInformation
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((info, index) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {coops.map((coop) => {
                        return (
                            <TableCell key={coop.id} align={coop.align}>
                            {coop.id === "employer" &&
                                info.employer    
                            }
                            {coop.id === "degree" &&
                                info.degree    
                            }
                            {coop.id === "city" &&
                                info.city  
                            }
                            {coop.id === "term" &&
                                info.term    
                            }
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={obj.coopInformation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
        );
    }
    {/* Returns this if its using the Professional Employment list */}
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {proInfo.map((pro) => (
                    <TableCell
                    key={pro.id}
                    align={pro.align}
                    style={{ minWidth: pro.minWidth }}
                    >
                    {pro.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {obj.professionalEmploymentInformation
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((info, index) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {proInfo.map((pro) => {
                        return (
                            <TableCell key={pro.id} align={pro.align}>
                            {pro.id === "employer" &&
                                info.employer    
                            }
                            {pro.id === "degree" &&
                                info.degree    
                            }
                            {pro.id === "city" &&
                                info.city  
                            }
                            {pro.id === "title" &&
                                info.title  
                            }
                            {pro.id === "startDate" &&
                                info.startDate    
                            }
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={obj.professionalEmploymentInformation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
        );
}
