import React, {useState} from "react"
import '../../styles/styles.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Painting = () =>{
    const [open, setOpen] = useState(false)
    const [painting20lQty, setpainting20lQty] = useState(0)
    const [painting4lQty, setpainting4lQty] = useState(0)
    const [numberOfCoats, setNumberOfCoats] = useState(0)
    const [wallArea, setWallArea] = useState(0)

    const calculateBlockwork = () => {
        setpainting20lQty(wallArea*10*0.0038)
        setpainting4lQty(0.2*1.3*28.8*wallArea)
        setNumberOfCoats(0.8*1.3*wallArea)
        setWallArea(5*10*1.1)
    }


    return(
        <>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align=""></TableCell>
            <TableCell align=""></TableCell>
            <TableCell align=""></TableCell>
            <TableCell align=""></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell align="">Painting</TableCell>
            <TableCell align=""><input type="text" className="text-input-field" className="text-input-field"/></TableCell>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Component</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Unit cost</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>20l Paint drums</TableCell>
                            <TableCell>{painting20lQty}</TableCell>
                            <TableCell>Drums</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" /></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4l Paint drums</TableCell>
                            <TableCell>{painting4lQty}</TableCell>
                            <TableCell>Drums</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="4000" /></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}

export default Painting;