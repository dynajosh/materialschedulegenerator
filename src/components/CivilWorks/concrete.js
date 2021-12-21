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
import Blockwork from './blockwork';
import Rendering from "./rendering";

const CalculationPage = () =>{
    const [open, setOpen] = useState(false)
    const [concreteVolume, setConcreteVolume] = useState('1');
    const [concreteCement, setConcreteCement] = useState(0)
    const [concreteSand, setConcreteSand] = useState(0)
    const [concreteMixRatio, setConcreteMixRatio] = useState(124)
    const [concreteGranite, setConcreteGranite] = useState(0)
    const [concreteCementAmount, setConcreteCementAmount]= useState(0)
    const [concreteSandAmount, setConcreteSandAmount] = useState(0);
    const [concreteGraniteAmount, setConcreteGraniteAmount] = useState(0)
    const [cementPrice, setCementPrice] = useState(0)
    const [sandPrice, setSandPrice] = useState(0)
    const [granitePrice, setGranitePrice] = useState(0)

    const calculateGraniteAmount = () => {
        setConcreteGraniteAmount(cementPrice*concreteCement)
        console.log("THis function was called")
    }


    const hanldeMixRatioChange = (e) => {
        setConcreteMixRatio(e.target.value)
        calculateGraniteAmount()
        console.log(concreteMixRatio)
    }

    const concreteChange = () => {
        // setConcreteVolume(e.target.value);
        if (concreteMixRatio == 124) {
            setConcreteCement(Math.round(0.143*1.4*28.8*concreteVolume))
            setConcreteSand(Math.round(0.286*1.4*1.32*concreteVolume))
            setConcreteGranite(Math.round(0.571*1.4*1.32*concreteVolume))
        } else if (concreteMixRatio == 136) {
            setConcreteCement(Math.round(0.1*1.4*28.8*concreteVolume))
            setConcreteSand(Math.round(0.3*1.4*1.32*concreteVolume))
            setConcreteGranite(Math.round(0.6*1.4*1.32*concreteVolume))
        } else if (concreteMixRatio == 148) {
            setConcreteCement(Math.round(0.08*1.4*28.8*concreteVolume))
            setConcreteSand(Math.round(0.31*1.4*1.32*concreteVolume))
            setConcreteGranite(Math.round(0.62*1.4*1.32*concreteVolume))
        }
    }

    const concreteButton = () => {
        concreteChange()
        // calculateGraniteAmount()
        setConcreteCementAmount(cementPrice*concreteCement)
        console.log(concreteCementAmount)
        setConcreteSandAmount(sandPrice*concreteSand)
        setConcreteGraniteAmount(granitePrice*concreteGranite)
    }
    
    return(
        <>
        <div>
            <h3 className="main-heading">Automated Material Schedule Generator</h3>   
        </div>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="">Element</TableCell>
            <TableCell align="">Quantity</TableCell>
            <TableCell align="">0</TableCell>
            <TableCell align=""></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell align="">Concrete</TableCell>
            <TableCell align="">
                <label>Concrete Volume: </label><br />
                <input
                    type="text"
                    name="concreteVolume"
                    value={concreteVolume}
                    className="text-input-field"
                    onChange={e => setConcreteVolume(e.target.value)}                    

                /> <br /><br />
                <label>Select Mix ratio: </label><br />
                <select value = {concreteMixRatio} onChange={(e)=>setConcreteMixRatio(e.target.value)} className="select-input-field">
                    <option value="124" >1:2:4</option>
                    <option value="136" >1:3:6</option>
                    <option value="148" >1:4:8</option>
                </select>
                </TableCell>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Component</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Unit Price</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Cement</TableCell>
                            <TableCell>{concreteCement}</TableCell>
                            <TableCell>bags</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" value={cementPrice} onChange={(e)=>setCementPrice(e.target.value)}/></TableCell>
                            <TableCell>{concreteCementAmount}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sand</TableCell>
                            <TableCell>{concreteSand}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="4000" value={sandPrice} onChange={(e)=>setSandPrice(e.target.value)}/></TableCell>
                            <TableCell>{concreteSandAmount}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Granite</TableCell>
                            <TableCell>{concreteGranite}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="5000" value={granitePrice} onChange={(e)=>setGranitePrice(e.target.value)}/></TableCell>
                            <TableCell>{concreteGraniteAmount}</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
            </TableRow>
          
        </TableBody>
      </Table>
      <button className="calculate-button" onClick={concreteButton}>Ca;lculate</button>
    </TableContainer>
        </>
    )
}

export default CalculationPage;