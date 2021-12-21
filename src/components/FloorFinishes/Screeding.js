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

const Screeding = () =>{
    const [open, setOpen] = useState(false)
    const [floorArea, setFloorArea] = useState(0);
    const [screedingCement, setScreedingCement] = useState(0)
    const [screedingSand, setScreedingSand] = useState(0)
    const [screedingMortarVolume, setScreedingMortarVolume] = useState(0)
    const [screedingThickess, setScreedingThickness] = useState(15)
    const [cementAmount, setCementAmount] = useState(0);
    const [cementPrice, setCementPrice] = useState(0);
    const [sandPrice, setSandPrice] = useState(0);
    const [sandAmount, setSandAmount] = useState(0)


    const calculateRendering = () => {
        setScreedingMortarVolume(floorArea*screedingThickess)
        setScreedingCement(0.2*1.3*28.8*screedingMortarVolume)
        setScreedingSand(0.8*1.3*1.31*screedingMortarVolume)
    }

    const screedingButton = () => {
        calculateRendering()
        setCementAmount(cementPrice*screedingCement)
        setSandAmount(sandPrice*screedingSand)
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
            <TableCell align="">Screed</TableCell>
            <TableCell align="">
                <label>Floor Area (in sqm):</label><br/>
                <input type="text" className="text-input-field" value={floorArea} onChange={(e)=>setFloorArea(e.target.value)}/><br/><br />
                <label>Screed thickness (in mm):</label><br/>
                <input type="text" className="text-input-field" value={screedingThickess} onChange={(e)=>setScreedingThickness(e.target.value/1000)}/></TableCell>
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
                            <TableCell>{screedingCement}</TableCell>
                            <TableCell>bags</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" value={cementPrice} onChange={(e)=>setCementPrice(e.target.value)}/></TableCell>
                            <TableCell>{cementAmount}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sand</TableCell>
                            <TableCell>{screedingSand}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3500" value={sandPrice} onChange={(e)=>setSandPrice(e.target.value)}/></TableCell>
                            <TableCell>{sandAmount}</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
            </TableRow>
          
        </TableBody>
      </Table>
      <button className="calculate-button" onClick={screedingButton}>Ca;lculate</button>
    </TableContainer>
        </>
    )
}

export default Screeding;