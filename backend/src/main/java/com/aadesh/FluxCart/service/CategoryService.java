package com.aadesh.FluxCart.service;

import com.aadesh.FluxCart.io.CategoryRequest;
import com.aadesh.FluxCart.io.CategoryResponse;

public interface CategoryService {

    CategoryResponse add(CategoryRequest request);
}
