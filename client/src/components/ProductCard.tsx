/**
 * فلسفة المكوّن: بطاقة منتج تجارية عملية مطابقة لمرجع Masheed Gate،
 * بصور واضحة وحالة توفر صريحة وزر طلب غير مبالغ في زخرفته.
 */

import { formatPrice, type Product } from "@/data/catalog";
import { useStore } from "@/contexts/StoreContext";
import { Check, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  const add = () => {
    addToCart(product);
    toast.success("تمت إضافة المنتج إلى عربة طلب عرض السعر");
  };

  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-image-wrap">
        <img src={product.image} alt={product.name} />
        {!product.available && <span className="coming-badge">سيتوفر قريباً</span>}
      </Link>
      <div className="product-card-body">
        <span className="product-brand">{product.brand}</span>
        <Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link>
        <div className="product-unit">الوحدة: {product.unit}</div>
        <div className="product-price-status">
          {product.available ? (
            product.price != null ? (
              <strong className="product-price">{formatPrice(product.price)}</strong>
            ) : (
              <><Check size={16} /><span>السعر عند الطلب</span></>
            )
          ) : (
            <span>هذا المنتج سيتوفر قريباً</span>
          )}
        </div>
        <button type="button" onClick={add} disabled={!product.available} className="add-to-cart-button">
          <ShoppingCart size={18} />
          {product.available ? "أضف لطلب السعر" : "غير متوفر حالياً"}
        </button>
      </div>
    </article>
  );
}

