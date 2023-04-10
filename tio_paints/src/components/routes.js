import { Routes, Route } from 'react-router-dom';
import { Product, SubProduct } from './product';
import NavBar from "./navbar";
import Slider from "./slider";
import Card from './card';
import Footer from "./footer";

const PageRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<>
                <NavBar />
                <Slider />
                <Card />
                <Footer />
            </>}/>
            <Route exact path="paints" element={<Product name="PAINTS" />} />
            <Route exact path="paints/undercoats" element={<SubProduct name="Undercoats"/>} />
            <Route exact path="paints/interioremulsions" element={<SubProduct name="Interior Emulsions"/>} />
            <Route exact path="paints/exterioremulsions" element={<SubProduct name="Exterior Emulsions"/>} />
            <Route exact path="tilingsolutions" element={<Product name="TILING SOLUTIONS" />} />
            <Route exact path="tilingsolutions/tileadhesives" element={<SubProduct name="Tile Adhesives"/>} />
            <Route exact path="tilingsolutions/tilegrout" element={<SubProduct name="Tile Grout"/>} />
            <Route exact path="tilingsolutions/tilecleaner" element={<SubProduct name="Tile Cleaner"/>} />
            <Route exact path="constructionchemicals" element={<Product name="CONSTRUCTION CHEMICALS" />} />
            <Route exact path="constructionchemicals/waterproofing" element={<SubProduct name="Water Proofing"/>} />
            <Route exact path="constructionchemicals/bondingagents" element={<SubProduct name="Bonding Agents"/>} />
            <Route exact path="constructionchemicals/admixture" element={<SubProduct name="Admixture"/>} />
            <Route exact path="kitchensinks" element={<Product name="KITCHEN SINKS" />} />
            <Route exact path="kitchensinks/glossyfinish" element={<SubProduct name="Glossy Finish"/>} />
            <Route exact path="kitchensinks/mattfinish" element={<SubProduct name="Matt Finish"/>} />
            <Route exact path="kitchensinks/handmadesinks" element={<SubProduct name="Handmade Sinks"/>} />
        </Routes>
    );
}

export default PageRoutes;