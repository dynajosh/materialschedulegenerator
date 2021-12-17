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

const Rendering = () =>{
    const [open, setOpen] = useState(false)
    const [renderingArea, setRenderingArea] = useState(0);
    const [renderingCement, setRenderingCement] = useState(0)
    const [renderingSand, setRenderingSand] = useState(0)
    const [renderingMortarVolume, setRenderingMortarVolume] = useState(0)
    const [renderingThickess, setRenderingThickness] = useState(15)

    const handleRenderingThicknessChange = (e) =>{
        setRenderingThickness(e.target.value/1000)
    }

    const calculateRendering = () => {
        setRenderingMortarVolume(renderingArea*renderingThickess)
        setRenderingCement(0.2*1.3*28.8*renderingMortarVolume)
        setRenderingSand(0.8*1.3*1.31*renderingMortarVolume)
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
            <TableCell align="">Rendering</TableCell>
            <TableCell align="">
                <label>Area to be rendered (in m):</label><br/>
                <input type="text" className="text-input-field"/><br/><br />
                <label>Rendering thickness (in mm):</label><br/>
                <input type="text" className="text-input-field"/></TableCell>
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
                            <TableCell>Cement</TableCell>
                            <TableCell>{renderingCement}</TableCell>
                            <TableCell>bags</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" /></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sand</TableCell>
                            <TableCell>{renderingSand}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3500" /></TableCell>
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

export default Rendering;