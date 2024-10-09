import React from 'react';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2>Findings</h2>
      <img src="wsi.png" height="200" width="250" />
      {/* Table 1 */}
      <h3>Table 1: </h3>
      <table>
        <thead>
          <tr>
            <th>RBC</th>
            <th>Count</th>
            <th>Percentage</th>
            
          </tr>
        </thead>
        <tbody>
          
          
          
          
          <tr>
            <td>Angled cells</td>
            <td>222</td>
            <td>67</td>
            
          </tr>
          
          <tr>
            <td>Borderline Ovalocytes</td>
            <td>50</td>
            <td>20%</td>
            
          </tr>
          
          <tr>
            <td>Burr cells</td>
            <td>87</td>
            <td>34%</td>
            
          </tr>
          
          <tr>
            <td>Fragmented  cells</td>
            <td>2</td>
            <td>.12</td>
           </tr>   
           <tr>
            <td>Ovalocytes</td>
            <td></td>
            <td></td>
            
          </tr>



        </tbody>
      </table>

      {/* Table 2 */}
      <h3>Table 2</h3>
      <table>
        <thead>
          <tr>
            <th>Wbc</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basophile</td>
            <td>34</td>
            <td>78%</td>
          </tr>
          <tr>
            <td>Lymphocite</td>
            <td>11</td>
            <td>45%</td>
          </tr>
          <tr>
            <td>Monocite</td>
            <td>12</td>
            <td>46%</td>
          </tr>




        </tbody>
      </table>

      {/* Table 3 */}
      <h3>Table 3</h3>
      <table>
        <thead>
          <tr>
            <th>Platelets</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Count</td>
            <td>222</td>
        
          </tr>
          <tr>
            <td>Percentage </td>
            <td>222</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeftPanel;

