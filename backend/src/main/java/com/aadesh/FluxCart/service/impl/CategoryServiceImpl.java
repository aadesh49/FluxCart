package com.aadesh.FluxCart.service.impl;

import com.aadesh.FluxCart.entity.CategoryEntity;
import com.aadesh.FluxCart.io.CategoryRequest;
import com.aadesh.FluxCart.io.CategoryResponse;
import com.aadesh.FluxCart.repository.CategoryRepository;
import com.aadesh.FluxCart.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponse add(CategoryRequest request) {
        CategoryEntity newCategory = convertToEntity(request);
        newCategory = categoryRepository.save(newCategory);
        return convertToResponse(newCategory);
    }

    @Override
    public List<CategoryResponse> fetch() {
        return categoryRepository.findAll()
                        .stream()
                        .map(this::convertToResponse)
                        .collect(Collectors.toList());
    }

    @Override
    public void delete(String categoryId) {
         CategoryEntity category = categoryRepository.findByCategoryId(categoryId)
                .orElseThrow(() -> new RuntimeException("Category does not exist"));

         categoryRepository.deleteById(category.getId());
    }

    @Override
    public CategoryResponse update(String categoryId, Map<String, Object> updates) {
        CategoryEntity category = categoryRepository.findByCategoryId(categoryId)
                .orElseThrow(() -> new RuntimeException("Category does not exist"));

        updates.forEach((key, value) -> {
            switch (key){
                case "name": category.setName(value.toString());
                break;
                case "description": category.setDescription(value.toString());
                break;
                case "url": category.setUrl(value.toString());
                break;
                case "bgColor": category.setBgColor(value.toString());
                break;
            }
        });
        CategoryEntity updated = categoryRepository.save(category);
        return convertToResponse(updated);
    }

    private CategoryResponse convertToResponse(CategoryEntity newCategory) {
        return CategoryResponse.builder()
                .categoryId(newCategory.getCategoryId())
                .name(newCategory.getName())
                .description(newCategory.getDescription())
                .bgColor(newCategory.getBgColor())
                .url(newCategory.getUrl())
                .createdAt(newCategory.getCreatedAt())
                .updatedAt(newCategory.getUpdatedAt())
                .build();
    }

    private CategoryEntity convertToEntity(CategoryRequest request) {
        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .bgColor(request.getBgColor())
                .url(request.getUrl())
                .build();
    }
}
