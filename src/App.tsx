import React from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, Button, Grid } from '@mui/material';

const App = () => {
  // ここで各ボタンの処理を実装します
  const handleNewFeature = () => {
    // 新機能に関する処理
    console.log('新機能処理');
  };

  const handleNewEvent = () => {
    // 新イベントに関する処理
    console.log('新イベント処理');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            業務システム
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Grid container spacing={2} style={{ padding: 16 }}>
        {/* カードのレイアウトをGridで作成 */}
        {[1, 2, 3].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  処理機能{card}
                </Typography>
                <Button variant="contained" onClick={handleNewFeature}>
                  処理
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        
        {/* 特別機能カード */}
        <Grid item xs={12} style={{ backgroundColor: '#FFD580', padding: 16 }}>
          <Card style={{ backgroundColor: '#FFE0B2' }}>
            <CardContent>
              <Typography variant="h5">
                特別機能
              </Typography>
              <Button variant="contained" color="primary" onClick={handleNewFeature} style={{ marginRight: 8 }}>
                新機能処理
              </Button>
              <Button variant="contained" color="secondary" onClick={handleNewEvent}>
                新イベント処理
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default App;