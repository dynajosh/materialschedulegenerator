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
    const [cementPrice, setCementPrice] = useState(0)
    const [sandPrice, setSandPrice] = useState(0)
    const [sandAmount, setSandAmount] = useState(0);
    const [cementAmount, setCementAmount] = useState(0);
    

    const calculateRendering = () => {
        setRenderingMortarVolume(renderingArea*renderingThickess)
        setRenderingCement(0.2*1.3*28.8*renderingMortarVolume)
        setRenderingSand(0.8*1.3*1.31*renderingMortarVolume)
    }

    const renderingButton = () => {
        calculateRendering()
        setCementAmount(cementPrice*renderingCement)
        setSandAmount(sandPrice*renderingSand)
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
                <label>Area to be rendered (in sqm):</label><br/>
                <input type="text" className="text-input-field" value={renderingArea} onChange={(e)=>setRenderingArea(e.target.value)}/><br/><br />
                <label>Rendering thickness (in mm):</label><br/>
                <input type="text" className="text-input-field" value={renderingThickess} onChange={(e)=>setRenderingThickness(e.target.value/1000)}/></TableCell>
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
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" onChange={(e)=>setCementPrice(e.target.value)}/></TableCell>
                            <TableCell>{cementAmount}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sand</TableCell>
                            <TableCell>{renderingSand}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3500" value={sandPrice} onChange= {(e)=> setSandPrice(e.target.value)} /></TableCell>
                            <TableCell>{sandAmount}</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
            </TableRow>
          
        </TableBody>
      </Table>
      <button className="calculate-button" onClick={renderingButton}>Ca;lculate</button>

    </TableContainer>
        </>
    )
}

export default Rendering;