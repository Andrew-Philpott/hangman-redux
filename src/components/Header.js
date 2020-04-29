import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "purple",
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.navbar} position="fixed">
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <br />
            <Toolbar>
              <Typography variant="h3">Hangman</Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={5}>
            <img
              width="100"
              height="100"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAAAe1BMVEX////+/v4AAADQ0ND5+fn4+PhaWlo/Pz9ERERWVlb19fXy8vKdnZ3v7+/Hx8dJSUno6Oi0tLTj4+OLi4uEhIS6urqlpaXR0dEODg4yMjIcHBxeXl7JycnAwMDc3Nynp6d5eXmVlZUtLS1xcXE4ODgWFhaHh4dnZ2cmJibwHKYcAAAHlElEQVR4nO2di3IaOwyGLSElYMdkgXAJt0AuTd7/CY+0SU6hhdOcop2YRR8zmenSEfzYlmVb2g3BcRzHcRzHcRzHcRzHcRzHcRzHcZz/B8jrPI2fBjFEis18PQgZMhUqnTjGRNAMMRKk71Z4BOYUQ25GOcXAkem7JR6GKMmrGdvVzYAyN2P7ZEAGeX7oXTXAoos4CLFQ5doll9gYN/IB3y3xMKI7dHA2a0L1rBb+3QqP8CEc76/N6WL5whE79qbTWQifBtMpjWUGh7MQvkxEwVB5oEhnIbxjKLrmXFq8YzvviDEXXiYu3IUbmXXhhlYtceEu3MisCze0aokLd+FGZl24oVVLXLgLP92kvpRP4fWOTGmYC4fInOQPvG896VYMRc7FKTcXTgx6UggcAr5oi1Mi3Xo0MW6IufBERClUy0F9oICDTp9SgvLOkeyFp5jDZLFzoLJZxQIPi+27egx5i/h4P4mpyhW/zRH7QxPTplgK103lwPUZ5FakEtSZIP07xPuh/Kus80ND4aqTMvTFWn/vjR+iPBOnUFKOgGWLR0pANMLXvauUxb/jSvxbbKtwhsAsHXtF+1cpjORiqKgk327Z1YkkdpnjWKX+hHImuMONzuYnfoIllsKjTOEb7A73+zTL1bCa41ICuhM/wRJD4dLgOWwlWFOlu9f1M67xSgObcrBtcZB47aEe7L+SECm3tqtDXmJXGvxApqQILytwtfTqRDDGZ4qZfm9aRiwru9NyjEuLdnEkHf2AF6ukq7dVuExi0MGJCD8wxmVxHg90hO/DUnii0MdnCUz3xnjUrBAS4RXEEz/BEtvpLKy714HTfp8Wp8cpI0JTObN/haHwKIGbLEgG2td3LsvvIUtVwEnkls7jxGJCYtO8P50BR4Z8L5FsWyM3jhC584Lr/XlLpvUYbrBXQVvHONQSn/Gx3nT4eVm8+XQu01xMbQ1gaqiHC+n1WQJUlvUY6xCX9fiTuIC2hqwfDPB6I7GMOHIW1ZACTTeIQ3H1bZ3H32HSPbZKE2Ol50eArOYH4tEztFq4NPFND/Fusg6hL358coW4GWu106GA7vuwb3Hp3+lRLD4vXue3C91gf5LQRTxca6ezD4Osm8zrp48jhavNK4Qofj4GDi2dzvbMhvSwGuH9pKRgbY9mhIPuNMMSb2WJUlL/3qGhFicd1CsRXtYifIeGhEemFFbYLWtLeZemWlwW4bI4v5Vpvf0trskP+kcPC2VSA3jv6iS/gqzE14WdmNrusgZN/ICoC1Pxb33dcmUJ32Rdml7eCLLJV7bBVPjraFWFPKQkMQwDqVevKOvv8Yq4DEVVVJuux58kYNlquC59m2vnJq0sfX0ib/SGrQ1ZgQbda8Q5ZpGtKxId4xzDWszPqyCN39LITX1bdaNx6tPDShRT7dWHD1pUvA4U2xur1xbWQ1mb4VtPpjQd40HWK5t1ELde2B1CGliWwvD1Sdt9vMWurM1vf2ium4ltS8yFR9bN1vHtZ7LXtfh5KjBwtd9zk3mccqjyVjr57G2aA+muk4ltS+yFJyCWyUyC9FeN3GKSEIaKmslq7Me4NLnurYrwZS1c1it8CS2+g05nJWZs17hwF26HCy8RF+7C7XDhJeLCXbiJVd1irmP1UnU3d4SktWe69VSq8qZOSzmw7rJCUUfDuzQknDkxdPS0tKjN9B0aGuNJk7weZ/OH0NBdfk+mqa6eIqhZvDE0aoq9cE1e1ky/j5ueDgrNDTAXrluqMWoCNz7P4xhxHJjKKk6oaaB+vNI8ELG5raY5XOFGT9LKG+n2ZdRafQbLGY6Gmso4rLM50wW0OFDFvBKvRqwJ2zS8x1EsMCPEvquLHfFrIxYPR8AEI7xN0OoWl2hNq4lrf34HUc+S6su3OJMxrkl+JZ2g2ZZmUOIYptLeEsF8pv0Q9PAqcA5FlaTYlmbkBDlMZ/gj5AifhYXAA3zr6NFSUbdat0wFERcWZWWC26x+7TM7XTr8FrFP4VAB4vdhmhGRtLgU76RTSwjz75m4/BojxKDJT6d+W0NM89zEn8v8rQfDrA79o6unAGsN2rU6qxxMC+5gqu0d959GAZw5SOi6TUWdFdtmPYlu+rX4RBMeM6y0trStwiM8yTjX4pO9SkMJ1SmH1aqs7ADTMc51tdWvxScy3MXbsb594idYYjqdaa3Z78UnUfMj6piupbmsGrMC/FZ8orc5Ewf/ng1VDk0eKBSNC3fhF4ILd+EXggt34ReCC3fhF4ILd+EXggt34ReCC3fhF4ILd+EXggt34ReCC3fhF4ILd+EXggt34ReCC3fh7YFAH9lyTBZRXRO4PH5HRc08L+oGm19Fk4f1iRYH0fv71y0OcOy/6C1Wy6on+SL1k+fCEVWQUy18GiId/W2Yyqsb+wos0vPR5tSyoRku6WiniIG5qCd2fZX6Lqn/5bk2Irxz/O2bLafqHD2f3hp4cdU7gryB+ILdY+/3rhAXoag7i34VqKuA/p4ZvoUCb8H3Z6Sr350iHHFcYBn0F9CHLC66f8/zuKxHu3yZCNVp1SB8ptMZxJj0AUzHZvI/kusnlp0jcNIdYUlf5zjGHcdxHMdxHMcph38Akc1Rm5ZD+NEAAAAASUVORK5CYII="
            ></img>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}
