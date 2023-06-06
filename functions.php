<?php

function meufoot_add_woocommerce_support(){
add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'meufoot_add_woocommerce_support');

function meufoot_css() {
  wp_register_style('meufoot-style', get_template_directory_uri() . '/style.css', array(), '1.0.0', false);
  wp_enqueue_style('meufoot-style');
}

add_action('wp_enqueue_scripts', 'meufoot_css');

require_once get_template_directory() . '/cmb2/load.php'

?>