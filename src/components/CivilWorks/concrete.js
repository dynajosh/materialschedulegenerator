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


    const hanldeMixRatioChange = (e) => {
        setConcreteMixRatio(e.target.value)
        console.log(concreteMixRatio)
    }

    const concreteChange = (e) => {
        setConcreteVolume(e.target.value);
        if (concreteMixRatio == 124) {
            setConcreteCement(0.143*1.4*28.8*concreteVolume)
            setConcreteSand(0.286*1.4*1.32*concreteVolume)
            setConcreteGranite(0.571*1.4*1.32*concreteVolume)
        } else if (concreteMixRatio == 136) {
            setConcreteCement(0.1*1.4*28.8*concreteVolume)
            setConcreteSand(0.3*1.4*1.32*concreteVolume)
            setConcreteGranite(0.6*1.4*1.32*concreteVolume)
        } else if (concreteMixRatio == 148) {
            setConcreteCement(0.08*1.4*28.8*concreteVolume)
            setConcreteSand(0.31*1.4*1.32*concreteVolume)
            setConcreteGranite(0.62*1.4*1.32*concreteVolume)
        }
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
            <TableCell align=""></TableCell>
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
                    className="text-input-field"
                    // onChange={e => setConcreteVolume(e.target.value)}
                    onChange={concreteChange}
                    

                /> <br /><br />
                <label>Select Mix ratio: </label><br />
                <select value = {concreteMixRatio} onChange={hanldeMixRatioChange} className="select-input-field">
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
                        <TableCell>Unit cost</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Cement</TableCell>
                            <TableCell>{concreteCement}</TableCell>
                            <TableCell>bags</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" /></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sand</TableCell>
                            <TableCell>{concreteSand}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="4000"/></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Granite</TableCell>
                            <TableCell>{concreteGranite}</TableCell>
                            <TableCell>tonnes</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="5000"/></TableCell>
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

export default CalculationPage;