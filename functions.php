<?php
// Add Theme Style on website.
function meufoot_add_woocommerce_support() {
  add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'meufoot_add_woocommerce_support');

function meufoot_css() {
  wp_register_style('meufoot-style', get_template_directory_uri() . '/style.css', [], '1.0.0', false);
  wp_enqueue_style('meufoot-style');
}
add_action('wp_enqueue_scripts', 'meufoot_css');
 
// Add new images sizes and custom crops on uploaded imagens from WP Library

function meufoot_custom_images() {
  add_image_size("category-box", 50, 50, ['center', 'top']);
  add_image_size("slide-image", 1280, 560);
  add_image_size('product-box', 300, 300, ['center', 'top']);
  add_image_size('prodcuct-gallery', 600, 560, ['center', 'top']);
  update_option("medium_crop", 1);
}

add_action('after_setup_theme', 'meufoot_custom_images');

// controls product display on category pages
function meufoot_chrono_loop_per_page() {
  return 8 ;
}

add_filter('loop_shop_per_page','meufoot_chrono_loop_per_page');
add_filter("body_class", 'remove_some_body_class');

// remove useless CSS bodyclass that are default for Woocommerce
function remove_some_body_class($classes) {
  $woo_class = array_search('woocommerce' , $classes);
  $woopage_class = array_search('woocommerce-page' , $classes);
  $search = in_array('archive' , $classes) || in_array('product-template-default', $classes);
  if($woo_class && $woopage_class && $search) {
    unset($classes[$woo_class]);
    unset($classes[$woopage_class]);
  }
  return $classes;
}

// format and deploy Html and CSS class for products on home and category pages.
function format_products($products, $img_size = "medium") {
  $products_final=[];
  foreach($products as $product) {
    if($product->is_type('variable')) {
      $regular_price = $product->get_variation_regular_price('min', true);
      $sell_price = $product->get_variation_sale_price('max', true);
    } else {
      $regular_price = $product->get_regular_price();
      $sell_price = $product->get_sale_price();
    }
    $products_final[] = [
      'name' => $product->get_name(),
      'link'=> $product->get_permalink(),
      'regular-price'=>$regular_price,
      'sell-price'=>$sell_price,
      'img' => wp_get_attachment_image_src($product->get_image_id(), $img_size)[0]
    ];
  }
  return $products_final;
}

function meufoot_product_list($products) { ?>
  <ul class='product-list'>
<?php foreach($products as $product) { ?>
  <li class="product-item">
    <a href="<?= $product['link']; ?>">
    <div class='product-img'>
      <img src="<?= $product['img']; ?>" alt="<?= $product['name']; ?>" loading='lazy' width="300" height="300">
    </div>
    <h2 class='font-2-up-m'><?= $product['name']; ?></h2>
    <div class='product-item__info'>
      <div class='product-item__info-price'>
        <p class='reg-price'>R$ <?= $product['regular-price']; ?></p>
        <p class='font-1-m sell-price'>R$ <?= $product['sell-price']; ?></p>
      </div>
      <div class='product-item__info-btn'>
        <span class='font-1-up-m'>Comprar</span>
      </div>
    </div>
    </a>
</li>
  <?php } ?>
  </ul>
<?php } ?>

<?php
function meufoot_format_single_product($id, $img_size = 'medium') {
  $product =(wc_get_product( $id ));
  $gallery_ids = $product->get_gallery_attachment_ids();
  $gallery = [];
  if($gallery_ids) {
    foreach ($gallery_ids as $img_id) {
      $gallery[] = wp_get_attachment_image_src($img_id, $img_size)[0];
    }
  }
  return [

    'id' => $id,
    'name'=>$product->get_name(),
    'regular-price'=> $product->get_variation_regular_price('min', true),
    'sell-price'=>$product->get_variation_sale_price('max', true),
    'link'=>$product->get_permalink(),
    'sku'=>$product->get_sku(),
    'description'=> $product->get_description(),
    'img' => wp_get_attachment_image_src($product->get_image_id(), $img_size)[0],
    'gallery'=>$gallery
  ];
}
?>

<?php 

function meufoot_get_product_variation($id, $image_size = 'medium') {
  $product = wc_get_product($id);

  if ($product->is_type('variable')) {
      $variations = $product->get_available_variations();
      $attributes_info = array();
  
    echo '<ul data-cat="imgs" class="cat-list__img">';
  
    foreach ($variations as $variation) {
      $attributes = $variation['attributes'];
  
      foreach ($attributes as $attribute_name => $attribute_value) {
        if (!empty($attribute_value)) {
          if($attribute_name === 'attribute_pa_imagem') {
            $variation_image = $variation['image'] ['url'];
            echo '<li><div class="cat-box__img"><img data-cat="imgs-box" src="' . $variation_image . '" alt="" loading="lazy"></div></li>';
          } else {
            $attributes_info[$attribute_name][] = $attribute_value;
          }
        }
      }
    }
    
    echo '</ul>';
  
    if(!empty($attributes_info)) {
      foreach($attributes_info as $attribute_name => $attribute_values) {
        echo '<div>';
        echo '<h3 class="cat-list__title font-1-up-s">' . str_replace("attribute_pa_", "", $attribute_name) . '</h3>';
        echo '<ul data-cat="attributes" class="cat-list__attr '. str_replace("attribute_", "", $attribute_name) . '">';
        sort($attribute_values);
        $unique_values = array_unique($attribute_values);
        foreach ($unique_values as $value) {
          echo '<li class="cat-variation"><p class="font-1-s">' . $value . '</p></li>';
        }
        echo '</ul>';
        echo '</div>';
        }
      }
    }
  
}
?>

<?php 
function custom_product_title( $product_title, $cart_item, $cart_item_key ) {
  $product = $cart_item['data'];
  $product_title = $product->get_title();

  return $product_title;
}
add_filter( 'woocommerce_cart_item_name', 'custom_product_title', 10, 3 );
?>

<?php 

function meufoot_custom_user_menu($menu_links) {
  unset($menu_links['downloads']);
  unset($menu_links['dashboard']);
  $menu_links['customer-logout'] = 'Sair';
  $menu_links['edit-account'] = 'Meus Dados';
  $menu_links['edit-address'] = 'Endereços';
  $menu_links['orders'] = 'Meus Pedidos';
  
  return $menu_links;
}

add_filter('woocommerce_account_menu_items', 'meufoot_custom_user_menu');

function alterar_rotulos_woocommerce( $translated_text, $text, $domain ) {
  switch ( $translated_text ) {
      case 'First Name':
          $translated_text = 'Primeiro Nome';
          break;
      case 'Last Name':
          $translated_text = 'Último Nome';
          break;
      case 'Password':
        $translated_text = 'Senha';
        break;
      // Adicione outros rótulos que deseja alterar aqui
      
  }
  return $translated_text;
}
add_filter( 'gettext', 'alterar_rotulos_woocommerce', 20, 3 );

function custom_order_item_details($item_name, $item, $is_visible) {
  $product = wc_get_product($item->get_product_id());

  if ($product) {
      $thumbnail = '';
      $variation_id = $item->get_variation_id(); // Obtém o ID da variação

      if ($variation_id) {
          $variation = wc_get_product($variation_id);

          if ($variation && $variation->get_image_id()) {
              $thumbnail = wp_get_attachment_image($variation->get_image_id(), 'thumbnail');
          }
      } elseif ($product->get_image_id()) {
          $thumbnail = wp_get_attachment_image($product->get_image_id(), 'thumbnail');
      }

      $item_name = $thumbnail . ' ' . $product->get_name();
  }

  return $item_name;
}

add_filter('woocommerce_order_item_name', 'custom_order_item_details', 10, 3);
add_filter('woocommerce_order_item_thumbnail', 'custom_order_item_details', 10, 3);

function add_async_defer_lazy_to_plugin_assets($tag, $handle, $src) {
  // Verificar se o recurso é carregado por um plugin ou pelo diretório wp-includes
  if (strpos($src, '/wp-content/plugins/') !== false || strpos($src, '/wp-includes/') !== false) {
      // Verificar se o recurso é um script
      if (wp_script_is($handle, 'registered')) {
          $tag = str_replace('></script>', ' loading="lazy"></script>', $tag);
      }
      
      // Verificar se o recurso é um estilo
      if (wp_style_is($handle, 'registered')) {
          $tag = str_replace('<link', '<link rel="stylesheet" async', $tag);
      }
  }
  
  return $tag;
}

add_filter('script_loader_tag', 'add_async_defer_lazy_to_plugin_assets', 10, 3);
add_filter('style_loader_tag', 'add_async_defer_lazy_to_plugin_assets', 10, 3);





?>



<?php 
require_once get_template_directory() . '/cmb2/load.php'
?>