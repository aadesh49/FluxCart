package com.aadesh.FluxCart.service;

import com.aadesh.FluxCart.io.CategoryRequest;
import com.aadesh.FluxCart.io.CategoryResponse;

import java.util.List;
import java.util.Map;

public interface CategoryService {

    CategoryResponse add(CategoryRequest request);

    List<CategoryResponse> fetch();

    void delete(String categoryId);

    CategoryResponse update(String CategoryId, Map<String, Object> updates);
}
