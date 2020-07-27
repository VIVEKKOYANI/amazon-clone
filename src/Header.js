import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAA3lBMVEUjLz7/////mQAgLTz/mwAdKjoaKDgOIDIADSb/nQBmbHTs7O4UJDWdoacqNkXn6OpIUV1UXGUAJ0CCiI5fZnEAFyyVmaAbLD8AFCodLT8SKj8LHjHy8/QFGy/b3d/U1ti2ub05Q1Bxd3+mbCPV19mGi5IpNUTKzM9zeYEACCS7vsKorLGNkpiQYSj2lQAAJUA+R1NNVV88OTqaZiXWhRPOgBqyciFMQDdWRTR9WC2/eCA2NzorMzsAABWusbaFXCvkixFTRDZoTy53VS7qjwN+VzBgSzHeiQ1GPTnSghrMvWILAAAMJElEQVR4nO2aeUPivBbGi6ELULYiS2nLIio7ogKD4nUZedX5/l/opltyuqAzCNyXuef3z4whTZOnJ2dJKwgIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiBHCRFFkexhWLKXYQ8JUS3FyE0LU10py2L4Rxf3D8ko12oW7CMZNdqixiogymVFbE+nbVmJ9hDjCfWSZMse35AiN4DzImpkXjtDLF+WHhummUgkzEy3UqhJ8Fcjl8u1KZY9Vys97DbOB5Vp2ZutbPVoS7M1apcj81eV60o3Y49rmo3HnmQFeqiFeAzQhxhyOjto0jtmz1QrsHZRdacl2JOV1dIjncUgbhbfhJQLg0SAZrrGb2I8eq2DsmCl836fR+cxE+XC9Ftal2pgXEkpNQLDmsMc6CGHbsqo8E7y5dDklz86T8ifddufSloSlBKfRS7wbL+NKD+GJ0ilUNmTUjJ+Y9+6AF0al6JArC5cfhHqYxSC4jg9enyBaj7ys3dvvw+p8VV7yinssUlpv3EoK3AFmcIu9RFz0VVQztlW5/L85yzQpSmTWjd4FZiZ1Ytd+wXbOl/KQ6zoc+uy/cnlyfZHgT6Z3O4cECGx6tBJ1iLy9ENdRv1sqKUh++PKZ4l4Tn0Fv5THasX8eO77FiBPbsMAO6C8yQPYWzoojxkWw2xHLup520uM/uTR8APYV/JY4dt5v/bD8lS64T7XuzIffpMI3VpInoQZ7pIJN7CLwrsO4Mu+UZ6WI49U3PBzSQ7NPLoFK3JkodthNNmYzTOpXwW+0GyTkDy/Qd51WeI1bxoWykoB7JOWZ/ryJgWLjn4q3/SNUvGMD2AK5IsHm2juaHeJBTZktk+tnsgG18d7zEF5GhFXlYe/m1PHro0hbyjTFlHhMe/c239EOmVcg43UcgxQ5b7rUZElVeHGNLSi8phdKHb+cjfJj1ryR+x6Lk9mLYmSGpEnW1YUMeCtWpf9vgTMu+jIU2MbJ+3ZucVkzRMWfHzUNn8oGcWdBzPrhuz0rzEFTWeAgDxDmlcbfF7eQ/o2Mrun7xGIzm4yisgztN2iaAADGip0IqTPH50bmJgNZjxHKhh8ddFHa4BHf+0MAMza8/ZgYs5zg/K0+sROsPm8duSbSS7batpZfz7nz1lm9/AcHJDHdSzc5BIZKewHXHmk9OPAKVKyfpoDLsqF5TFA3pJ13QZ/br4LFBS2+m45JI9rXzIfprijzJDQek+R28U2k5s7n4g8TTcsAb/rxWDCMw8vrZEMOq4wPWUh5BN5YIxqeJEP7i2vG0+DHOcM5PFmASzudKeFBXEOHAgRJVXub5bn0TUFwj3FSPauj50YcatvOix1rTyJDslDRLBZPadBLtktBmWvnzoK3ATI42+/9p7kscOIXNbb16e9CnezEXmynhg55njPpLA8xeCuF1XLyE2LZxdZnkGE5LFYlGM5jSBOWVPWtx6gx4Ua+NPXNMc03ak8RLXaZ9lmPlz/heUZReRJfyqPKKvF0qARHjcojwp8SNfPV8DaR748YO8MjUAX77CN5NhMdymPKvW6kYQ4Th4v0gN5Tj+Rh1jTSmxiHJBH5IMlTFZLqpH0IrB3bGcD5PHc/17kIVZ6Q1H6PXkkMRuneVgeA+TTaXYewgMXkIdH9vNaQB55f/IQOb7y+6480nSD6EF5ZHDs8ciPCcGkekweibXllUPJEzwLM/Pn3IV+Rx5pGjCdfOOc7yEgjwjS5Qbh7bwo4dYjGIeXB2Zk+WyxLXwW2H9fHiIB2+n2CjkpPrDDshSmcrGbS+VKHmhzgWiQyIqGRAj5JC38fXlAsM4XLZWGlti0ED6cCjyBBznOxf/Q94ADuZFXk+5CHpCBmN75fJw8Eng43cBrHonX6yzv2Ry59iUPyH/PDW96fIdvLw+ofvxEL0YeIvMdaE4DCwJ1y6MVbcsaB5EnlIg69+A7fHt5wFmh4t1KrkTkgaelvb6sglepoIjrsqKCe6+SehB5wJx9xwi80fbyWMwoG7484EzbkwdWoplsttIr6orlOxru2hu+asBdF8SDyANcT0GMKOaZ9Z/LA1yPf/ZMRB7Y3RKJqNFD2sygZ7lvasDM/KMtbpJ5e9ADyFPmm8C3nj5fRqO8rTzcpeU964GVlTuMDCpRSEtwXlafhrpTeViLc4h0COsZBG9JW7gH9W/yLevxTtCgF06cO1Ypbyg53BMxQtg9Gm7QsLhZO2eBB5CHn3AmMvabfGKBUOsf+G8TufjSh/ZrX7EWMBW7TiBkkzrudgJTu6jZ7wja7G93wx5AHhAMEudtWVbhO/SEl6ptE7mArVRkWW6H3tnQypyEX20C7FMkaIEVSVXP+J9F6UDygFMnSqMZsXfbjLeQx4BlrtmMFKdd40t5YO5EXRiYmfui5yBZs7H5ZaaDfdy1hTxiIfEpDflreYjajP0x7wX6Q8gDAgQjw32gc1K3Tc1Vi3lz32LLzU8Dm8vMN7tdeFbpHtGK7bjXs6b/EchhKvbIaU++rXgmZZ45kX2riv0ysrRhreAJ0NQlVkHlh72CqtRq5ZpiTHvZBpCHlmRRfcxrljgeQh4S/vapq0vk0ll+5vpb5z3Bc1TzokwMN2loGU7VKtife52WLf6dlagaSiGb4YtT2+H9dd5mpz+fypPekTwCnTRYSL5nfzXnrK3hz4SHIf+9hMCu8N5GgoM8P/uWcnB/DZwPBi3b22a9D5jUUbZdjqxCNGg7k0BUR9CAMiODH/SLrCYxfXn4vELvS76DLJQG+Uwmk28Mz1R3ZlJ70Lr0py5eZ13YyYt06rWU2MFy2mvpsQWT2nXl3Bm3O7ouux2tUpN/PafKrAQFH75Slwy+PiHyZamb8T4JLQnwSEiQet492U5i8+rt8vtUolqWkLtUawZbm2iBj0hF2YV/OCjJRqTFBZqDKNekXE6wwJfAai34daZA9Lqm6Q+r1YOgafVq3OTKQuE0fVrQy+EPf9XIPd1ZGHLoJt+HEPJ1p52Pq2v68mkxe15Tnt/n42U9rrf9llX6F344TrTY6e6KqvbSeT5JJZMnLsnUyTzGfv6tkJt550Hbm0Day/zEV8Yn9UPf1+12jr5Mpdbjan0/o9dvT5IAT56fR2Q+9TGd9/Odtg+ByCqVmjzP5veLzu1t5/7XJHl08gjaKzX/5PPrPgQiPz5WD1Uat+oUrb6a2/qkXo5nc1HqyzXVJ/n8tAcnreswqtWXjvUI/74A9Rn11SxlB5X1mAbhPd3CSXf0jwm9z3pPjm5v6PVFyom6J4ubq91PXte0u86Sjlu1rSc5PzZ5aPLz042/yeTsTtN26TpJ/eqmM6HpDg3n9X/oTVLjo5OHWv+Ds8GcvG2xvNrRJiPUHz/NUrbyyaUuaB1bntVxuR4X/WrsJybJ1KTzQm3om8uwtXmdJ11xkrbNXD3T/82O0HhstJVnQI5C68VbVavrW0pEaDR/ePK0sb3+UvM8c+rpSOWhBnQ34RWAXR2NP6o05vyhRFSaOnnrvKdSvjWedJzAVR9T+Sd7qosPQb3egSVSkhYc8/GLQHdJ9XdWRWyjqT68dX6BIpRup5cr52JtljxJ3R6r8dgQ7WaeDNSQVKKT2f14ubJFqlf1mNML2qRX7axYWL3d3r8nU3CE5PrOi4T6D7q31keWE4bRr5aRIjtJNUquf93f3i1pkUCoEjZ191+6kx5WH8vX2/vZOqiMfeXkVvfNpX6bOkndHbPxOFRjBHJFoiqlJuv32ZwWmYtFp9NZLO7n89n7ekJ/SCYj1yTXt4QdlhD9+SR1f/TqCM4Z1mISIxDXKRk9p4j2en7SQRVX/UlbHo6qGt2Irq3Gz3Em9JvQ1On+Z7DE1e5T649jOsr4FOph3u7Xm0zjK21m45twaaK/v3/8DVuLUdUeXv9YIUebHzShDI+m3wh/je14EKoQTfAm4YC0UZqT5/u7jxhtnMGOO6THQxWqf7wuZuvUZxrZQW3yfv/08rBBm78ZnUq0Wt4tfr1Pkm4IB6Sc8+TF+O1G375GO3rsekEjqx/L13GHZju/bGj+07m9e/tx82CXHf93VhPBrh6qfrLs585V/a/0KgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCHIT/Al5/E0HQZWNEAAAAAElFTkSuQmCC"
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header_optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in the basket */}
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
