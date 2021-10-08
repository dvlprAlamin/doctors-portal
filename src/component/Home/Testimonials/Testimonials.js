import { Avatar, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const Testimonials = () => {
    const useStyle = makeStyles({
        root: {
            backgroundImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAEpCAMAAAC0rSlIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURQAAAPD8/Nb29ki5vAoAAAACdFJOUwCF60G6lwAAA9BJREFUeNrt3VuS41QQBFBV7n/R8MEPBAzDYEt5SydXUHmifPVoh/u6RERERESqkywrNJl28SxDb280+SO7xH/PtA+4B7290eRP2SXeuer5a5aRFzbK32QZeVmhSZah1zf6hwHTfmf7C43qBzx21esb/WjAM1f9x43qBzxx1esb/euAx636TzQqvEk8e9XrGyXb0Osb5aezjPy5Rsk29KlvlGxTr2+UbEOvbzTJNvX/XGjaB6xHr2+UX8uSC+gzq5516PWNJtmmXl8o2Ybe3yjZpl5fKNmG3t/o/07Y94Y39ehJlq16faN8IrOM/MvoSf+M2xp9aMKiVU89epJlq17faLIOvb7RJ8071PsbJdvQp75Rsk29v1HWofc3Srapf6HQ9Jtnm/mHGyXb1L9TaPrNs838k42Sber9hbIOvb9Rsk29v1DWofc3+u6ET7zhTT16kmWr3t9ovj7i3as+/ejJtlXvb5R16P2Nkm3q/Y2Y7zR3ttw94qy7htaPuO6paNonfOKrRi9/+l/3luszjWYb+XXAx3bVufLyP1s8963R1/557sEv6h5wUm4j/9IlaurNryfTv0TryE9otOtk+c7h0r8W17Vs0ad+wmudef+I1zb0qZ/wWmfeP2KB+TA/fNH71+JifvuI1zr0/vOP+f0jXtvQv/VUPczvL7TO/OovNO2fxIXmfsnlAfNhfv9hue08P+KHr5gfu+iXRb99xCLzYX7qoveP6BcuH/gsrjOfl6/FwkbrzOcd5vsWfSz6ukbMjzSH/vpFP6GRRb//Qc+iW/SKRtM/Ypn59Dcai27RX9EI+onow/z+I92iO10O+Od/1zpz6EfepfeP6F+LWnTo0L8z4qxDN+LKRR/ojnSny4nm0KG/A32gW3SnC3To0KE/1miMuHOLLPr9jQa6Ix06dOhrLlLrbl4uNy/nve6C7o4RuusodOjQV7/ucpvuNh06dM9G0KG7jnoghQ7dbTp06NBfg97X78lCA722EXTo0KFDv+dpDzr0M9ADHfqhH0bo0KEfiR7o0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDX4cuIiIiIiIiIiIiIiIi78xv71yQXj4Ywy4AAAAASUVORK5CYII=',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 0',
            backgroundSize: 150
        }
    })
    const { root } = useStyle();
    return (
        <section className={root}>
            <Container>
                <Typography variant="h5" color="primary">TESTIMONIAL</Typography>
                <Typography variant="h3">What Our Patients <br /> Says</Typography>
                <Card variant="outlined">
                    <CardActionArea style={{ paddingTop: 20 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!
                            </Typography>
                            <div style={{ display: 'flex' }}>
                                <Avatar src="" />
                                <div>
                                    <Typography variant="body1" color="primary">Winson Harry</Typography>
                                    <Typography variant="body1">California</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </section>
    );
};

export default Testimonials;